import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items/items.service';

@Controller()
export class AppController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get('items')
  getItems(): string[] {
    return this.itemsService.getItems();
  }
}
