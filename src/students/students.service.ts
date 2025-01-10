import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { UpdateStudentDto } from './dto/update-student.dto';



@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ){}
  async updateStudent(id: number, updateData: UpdateStudentDto): Promise<Student> {
    await this.studentRepository.update(id, updateData);
    return this.studentRepository.findOne({ where: { id } });
  }
}