// src/app/api/mux/route.ts

import { NextResponse } from 'next/server';
import Mux from '@mux/mux-node';

export async function POST(request: Request) {
    try {
        const { playbackId } = await request.json();

        if (!playbackId) {
            return new NextResponse('Playback ID is required', { status: 400 });
        }

        const signingKeyId = process.env.MUX_SIGNING_KEY_ID;
        const privateKey = process.env.MUX_SIGNING_KEY_PRIVATE_KEY;

        if (!signingKeyId || !privateKey) {
            throw new Error('Mux signing key or private key is not configured.');
        }

        // قم بإنشاء توكن JWT صالح لمدة ساعة واحدة
        const token = Mux.JWT.sign(playbackId, {
            key_id: signingKeyId,
            key_secret: privateKey,
            expiration: '1h', // 'h' for hours, 'd' for days, 'm' for minutes
            type: 'video'
        });

        return NextResponse.json({ token });
    } catch (error) {
        console.error('Error creating signed token', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}