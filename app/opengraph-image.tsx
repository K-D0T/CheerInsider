import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'CheerInsider — independent all-star cheerleading coverage for parents';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#0F0E13',
          padding: '80px 88px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontFamily: 'sans-serif',
            fontSize: 26,
            letterSpacing: '6px',
            color: '#FF1F7A',
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          CHEERINSIDER
        </div>
        <div
          style={{
            display: 'flex',
            fontFamily: 'sans-serif',
            fontSize: 82,
            fontWeight: 900,
            color: '#FAF6F1',
            lineHeight: 1.06,
            letterSpacing: '-3px',
            maxWidth: 940,
          }}
        >
          Honest coverage of all-star cheer, for the parents paying for it.
        </div>
        <div
          style={{
            display: 'flex',
            fontFamily: 'sans-serif',
            fontSize: 28,
            color: 'rgba(250,246,241,0.62)',
            marginTop: 34,
          }}
        >
          Real costs · Gym selection · Gear · Rules explained
        </div>
      </div>
    ),
    { ...size },
  );
}
