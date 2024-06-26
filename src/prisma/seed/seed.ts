/**
 * ! Executing this script will delete all data in your database and seed it with 10 tTMiniApp.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from '@snaplet/seed';
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';

const main = async () => {
  const seed = await createSeedClient({});

  // Truncate all tables in the database
  await seed.$resetDatabase();

  await seed.operator([
    {
      countryCode: '86',
      name: 'root',
      password: (() => {
        const saltRounds = 10;
        const plaintextPassword = 'Test1234!';
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(plaintextPassword, salt);
        return hash;
      })(),
      phoneNumber: '18965196260',
      purePhoneNumber: '+8618965196260',
    },
  ]);

  const { tTMiniAppUserPhone } = await seed.tTMiniAppUserPhone([
    {
      countryCode: '86',
      phoneNumber: '18965196260',
      purePhoneNumber: '+8618965196260',
    },
  ]);

  await seed.organization([
    {
      documents: (x) =>
        x(10, {
          href: 'https://stageclient.unisco.com/unis_commercial_credit_application.pdf',
          thumbnail:
            'https://p.sda1.dev/17/d20f92a944b003ad6f04be896a01ccdd/doc@2x.webp',
          downloadCount: 100,
          downloads: (x) =>
            x(100, {
              phoneId: tTMiniAppUserPhone[0].id,
            }),
        }),
      name: '测试律师事务咨询',
      lawyers: (x) =>
        x(10, ({ index }) => ({
          name: `律师 No.${index + 1}`,
          portrait:
            'https://p.sda1.dev/17/aed5990956e9c8c69281a0e8eaf81b85/demo-portrait@3x.png',
        })),
      miniApps: [
        {
          appId: v4(),
          name: '测试律师事务咨询抖音小程序',
        },
      ],
    },
  ]);

  await seed.organization((x) => x(100));

  console.log('Database seeded successfully!');

  process.exit();
};

main();
