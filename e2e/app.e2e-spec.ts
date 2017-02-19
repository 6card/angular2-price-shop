import { Angular2PriceShopPage } from './app.po';

describe('angular2-price-shop App', function() {
  let page: Angular2PriceShopPage;

  beforeEach(() => {
    page = new Angular2PriceShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
