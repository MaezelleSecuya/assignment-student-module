import { Controller, Patch, Param, Body } from '@nestjs/common';
import { StudentService } from './students.service';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.updateStudent(+id, updateStudentDto);  // Cast id to number
  }
}
