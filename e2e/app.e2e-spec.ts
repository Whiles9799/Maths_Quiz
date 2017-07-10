import { MathsQuizPage } from './app.po';

describe('maths-quiz App', () => {
  let page: MathsQuizPage;

  beforeEach(() => {
    page = new MathsQuizPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
