import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Local',
  connector: 'ibmi',
  dsn: '',
  connectionString: `DRIVER=IBM i Access ODBC driver;UID=MAQU;PWD=hiwX!EbT%6Mp9$F;SYSTEM=10.0.0.28;DBQ=TOOLSHOP_DEV,XONKVHU,KVHUTSTLIB,ABWLIBKVHU;`,
  user: 'MAQU',
  password: 'hiwX!EbT%6Mp9$F'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LocalDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Local';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Local', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
