import { Injectable } from '@nestjs/common';
import { DatabaseUtil } from '../../shared/database/database.util';
import { PoolConnection } from 'mysql2/promise';

@Injectable()
export class Owner {
  constructor(private readonly databaseUtil: DatabaseUtil) {}

  /**
   * 회원 조회
   * @param connection
   * @param ownerId
   */
  async findOne(connection: PoolConnection, ownerId: string): Promise<any> {
    return await this.databaseUtil.dbQuery(
      connection,
      `select * from owner where ownerId=?`,
      [ownerId],
    );
  }
}
