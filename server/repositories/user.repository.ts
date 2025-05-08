// user.repository.ts
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'



export class LoginUser {
  private readonly userRepository: Repository<User>

  constructor(userRepository: Repository<User>) {
    this.userRepository = userRepository
  }

  // 유저 찾기 (이메일로)
  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email } })
  }

  // 유저 저장하기
  async saveUser(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData)
    return await this.userRepository.save(user)
  }

  // 로그인 확인용 (이메일 + 비밀번호)
  async validateUser(email: string, password: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email, password } })
  }
}
