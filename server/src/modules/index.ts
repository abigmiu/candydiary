import { AuthModule } from './auth/auth.module';
import { CodeModule } from './code/code.module';
import { UserConfigModule } from './user-config/user-config.module';
import { UserModule } from './user/user.module';

const modules = [UserModule, CodeModule, UserConfigModule, AuthModule];

export default modules;
