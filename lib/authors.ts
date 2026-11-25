// People who write for CheerInsider. An article names its author by id in
// its JSON ("author": "<id>"); an article with no author keeps the
// CheerInsider Editorial byline. Credentials are listed exactly as the
// author supplied them.

export interface Author {
  id: string;
  name: string;
  credentials: string[];
}

export const AUTHORS: Author[] = [
  {
    id: 'kaiden-thrailkill',
    name: 'Kaiden Thrailkill',
    credentials: [
      'Arkansas Cheer, 2019–2022',
      'West Georgia Cheer, 2022–2024',
      'D1 college national champion, 2023–24',
      '2nd place, D1 college nationals, 2022–23',
      '500+ private stunting lessons coached',
      'Proven Cheer company coach, 2023–24',
    ],
  },
];

export function getAuthor(id: string | undefined): Author | undefined {
  return id ? AUTHORS.find((a) => a.id === id) : undefined;
}

export function authorPath(a: Author): string {
  return `/authors/${a.id}`;
}
