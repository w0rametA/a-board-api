import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { env } from '@constants/environment.constant'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Board API')
    .setDescription('The API for Board API')
    .setContact(
      'Woramet A',
      'https://www.github.com/w0rametA',
      'woramet.woratat@gmail.com',
    )
    .setVersion(env.version)
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('docs', app, document, {
    jsonDocumentUrl: '/docs/json',
  })
  await app.listen(env.port)
}
bootstrap()
