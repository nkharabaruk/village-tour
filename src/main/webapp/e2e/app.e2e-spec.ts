import { VillageTourPage } from './app.po';

describe('village-tour App', () => {
  let page: VillageTourPage;

  beforeEach(() => {
    page = new VillageTourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
