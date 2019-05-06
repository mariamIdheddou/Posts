export class Post {
  loveIts: number;
  createdAt: Date;
  constructor(public titre: string , public contents: string ) {
    this.loveIts = 0;
    this.createdAt = new Date();

  }
}
