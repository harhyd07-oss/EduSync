from django.db import models
from django.core.validators import MinValueValidator,MaxValueValidator
from .validators import validate_roll_number_pattern, validate_student_name, validate_phone_number
# Create your models here.
class Student(models.Model):
    DEPARTMENT_CHOICES = [
        ('CSE', 'Computer Science Engineering'),
        ('ECE', 'Electronics and Communication Engineering'),
        ('EEE', 'Electrical and Electronics Engineering'),
        ('MECH', 'Mechanical Engineering'),
        ('CIVIL', 'Civil Engineering'),
        ('AIML', 'Artificial Intelligence & Machine Learning'),
        ('CSM', 'Computer Science & Engineering (AI & ML)'),
        ('CSD', 'Computer Science & Engineering (Data Science)'),
        ('IT', 'Information Technology'),
    ]

    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]

    YEAR_CHOICES = [
        (1, '1st Year'),
        (2, '2nd Year'),
        (3, '3rd Year'),
        (4, '4th Year'),
    ]

    SECTION_CHOICES = [
        ('A', 'Section A'),
        ('B', 'Section B'),
        ('C', 'Section C'),
        ('D', 'Section D'),
    ]

    name=models.CharField(max_length=50, validators=[validate_student_name])
    roll_number=models.CharField(max_length=20,unique=True,primary_key=True,validators=[validate_roll_number_pattern])
    email=models.EmailField(max_length=30,unique=True)
    phone=models.CharField(max_length=10, validators=[validate_phone_number])
    gender=models.CharField(max_length=1,choices=GENDER_CHOICES)
    department=models.CharField(max_length=10,choices=DEPARTMENT_CHOICES)
    year=models.IntegerField(choices=YEAR_CHOICES)
    section=models.CharField(max_length=1,choices=SECTION_CHOICES)
    cgpa=models.FloatField(validators=[MinValueValidator(0.0),MaxValueValidator(10.0)])
    attendance=models.FloatField(validators=[MinValueValidator(0.0),MaxValueValidator(100.0)])
    address=models.TextField()
    date_of_birth=models.DateField()
    admission_date=models.DateField()
    is_active=models.BooleanField(default=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    def __str__(self):
        return f"{self.roll_number} - {self.name}"

