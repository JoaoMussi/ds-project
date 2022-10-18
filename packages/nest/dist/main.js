"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const auth_module_1 = require("./auth.module");
const sdk_node_1 = require("@opentelemetry/sdk-node");
const auto_instrumentations_node_1 = require("@opentelemetry/auto-instrumentations-node");
const api_1 = require("@opentelemetry/api");
async function bootstrap() {
    initOtel();
    const app = await core_1.NestFactory.create(auth_module_1.AuthModule);
    app.enableCors();
    await app.listen(3000);
}
function initOtel() {
    api_1.diag.setLogger(new api_1.DiagConsoleLogger(), api_1.DiagLogLevel.INFO);
    const sdk = new sdk_node_1.NodeSDK({
        traceExporter: new sdk_node_1.tracing.ConsoleSpanExporter(),
        instrumentations: [(0, auto_instrumentations_node_1.getNodeAutoInstrumentations)()]
    });
    sdk.start();
}
bootstrap();
//# sourceMappingURL=main.js.map