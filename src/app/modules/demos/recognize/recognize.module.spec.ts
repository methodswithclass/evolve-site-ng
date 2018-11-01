import { RecognizeModule } from './recognize.module';

describe('RecognizeModule', () => {
  let recognizeModule: RecognizeModule;

  beforeEach(() => {
    recognizeModule = new RecognizeModule();
  });

  it('should create an instance', () => {
    expect(recognizeModule).toBeTruthy();
  });
});
