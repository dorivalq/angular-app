import { SkuModule } from './sku.module';

describe('SkuModule', () => {
  let skuModule: SkuModule;

  beforeEach(() => {
    skuModule = new SkuModule();
  });

  it('should create an instance', () => {
    expect(skuModule).toBeTruthy();
  });
});
