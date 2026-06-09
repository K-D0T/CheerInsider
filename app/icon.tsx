import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: '6px',
        }}
      >
        <span
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 900,
            fontSize: '18px',
            letterSpacing: '-1px',
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
