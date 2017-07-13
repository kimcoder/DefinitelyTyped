// Type definitions for express-sanitized 0.5
// Project: https://github.com/askhogan/express-sanitized
// Definitions by: Chris Barth <https://github.com/cjbarth/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as express from "express";

declare function e(): (req: express.Request, res: express.Response, next: express.NextFunction) => void;

declare namespace e {
}

export = e;
