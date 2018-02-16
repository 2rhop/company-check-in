import { PersonRegPage } from './app.po';

describe('person-reg App', () => {
  let page: PersonRegPage;

  beforeEach(() => {
    page = new PersonRegPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
