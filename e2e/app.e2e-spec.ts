import { SrvSideIntegrationFormPage } from './app.po';

describe('srv-side-integration-form App', () => {
  let page: SrvSideIntegrationFormPage;

  beforeEach(() => {
    page = new SrvSideIntegrationFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
