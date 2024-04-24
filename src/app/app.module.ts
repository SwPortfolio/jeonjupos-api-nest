import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from "../core/core.module";
import { FeatureModule } from "../feature/feature.module";
import { SharedModule } from "../shared/shared.module";
import {ConfigModule} from "@nestjs/config";
import configuration from "../core/configuration/configuration";
import {join} from "path";
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
      renderPath: '/',
    }),
    CoreModule,
    FeatureModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
