import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0F0E13',
        }}
      >
        <span
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 900,
            fontSize: '88px',
            letterSpacing: '-4px',
            color: '#FF1F7A',
            lineHeight: 1,
          }}
        >
          CI
        </span>
      </div>
    ),
    { ...size },
  );
}
