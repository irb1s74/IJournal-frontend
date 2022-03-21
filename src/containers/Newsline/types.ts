export interface IBlock {
  type: string;
  render: string;
}

export interface INews {
  title: string;
  author: string;
  entry: {
    blocks: IBlock[];
  };
}
