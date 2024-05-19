import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentDownloadsModule } from './document-downloads/document-downloads.module';
import { DocumentsModule } from './documents/documents.module';
import { LawyersModule } from './lawyers/lawyers.module';
import { OperatorsModule } from './operators/operators.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { SharedModule } from './shared/shared.module';
import { SignInModule } from './sign-in/sign-in.module';
import { TtMiniAppUserPhonesModule } from './tt-mini-app-user-phones/tt-mini-app-user-phones.module';
import { TtMiniAppUsersModule } from './tt-mini-app-users/tt-mini-app-users.module';
import { TtMiniAppsModule } from './tt-mini-apps/tt-mini-apps.module';
import { SignOutModule } from './sign-out/sign-out.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env'],
      isGlobal: true,
    }),
    OrganizationsModule,
    LawyersModule,
    DocumentsModule,
    TtMiniAppsModule,
    OperatorsModule,
    SignInModule,
    TtMiniAppUsersModule,
    TtMiniAppUserPhonesModule,
    DocumentDownloadsModule,
    SharedModule,
    SignOutModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
