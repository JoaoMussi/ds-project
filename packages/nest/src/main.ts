import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { NodeSDK, tracing } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';

async function bootstrap() {
  initOtel();

  const app = await NestFactory.create(AuthModule);
  app.enableCors();
  await app.listen(3000);
}

function initOtel() {
  diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

  const sdk = new NodeSDK({
    traceExporter: new tracing.ConsoleSpanExporter(),
    instrumentations: [getNodeAutoInstrumentations()]
  });

  sdk.start();
}

bootstrap();
