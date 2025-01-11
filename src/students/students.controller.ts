import { Controller, Delete, Param } from '@nestjs/common';
import { StudentService } from './students.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.delete(+id); 
  }
}
