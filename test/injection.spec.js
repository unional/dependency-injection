import {Container} from '../src/container';
import {inject, autoinject} from '../src/injection';

describe('autoinject', () => {
	it('automatically configures as singleton', function() {
    class Logger {}

	  @inject(Logger)
    class App1 {
      constructor(logger) {
        this.logger = logger;
      }
    }

	  @autoinject
    class App2 {
      constructor(logger: Logger) {
        this.logger = logger;
      }
    }
	  
    var container = new Container();
    var app1 = container.get(App1);
    var app2 = container.get(App2);

    expect(app1.logger).toBe(app2.logger);
    expect(app1.logger).not.toBe(null);
	});
});