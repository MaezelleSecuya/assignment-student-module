import { Controller, Param, Delete } from '@nestjs/common';
import { StudentService } from './students.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.studentService.deleteStudent(id);
  }
  
  
}