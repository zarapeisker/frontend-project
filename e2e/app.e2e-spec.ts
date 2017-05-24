import { ProjectFrontendPage } from './app.po';

describe('project-frontend App', () => {
  let page: ProjectFrontendPage;

  beforeEach(() => {
    page = new ProjectFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
