import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  private readonly items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  getItems(): string[] {
    return this.items;
  }
}
