import { Injectable } from '@nestjs/common';
import { DatabaseUtil } from '../../shared/database/database.util';
import { PoolConnection } from 'mysql2/promise';

@Injectable()
export class AuthModel {
  constructor(private readonly databaseUtil: DatabaseUtil) {}

  async getMemberToken(
    connection: PoolConnection,
    token: string,
    memberId: string,
  ) {
    return await this.databaseUtil.dbQuery(
      connection,
      `
               select * 
               from ownerToken
               join owner on ownerToken.ownerPkey=owner.ownerPkey 
               where ownerToken.accessToken=? and owner.memberId=?
            `,
      [token, memberId],
    );
  }
}
