from django.contrib import admin
from .models import Student
# Register your models here.
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('roll_number','name','department','year','section','cgpa','attendance')
    search_fields = ('roll_number','name','email')
    list_filter = ('department','year','section','gender')
    ordering = ('roll_number',)
    list_per_page =10
    readonly_fields = ('created_at','updated_at')
    fieldsets = (('Personal Information',{"fields": ('roll_number','name','gender','date_of_birth',)}),
                 ('Contact Information',{"fields":('email','phone','address',)}),
                 ('Academic Information',{"fields":('department','year','section','admission_date',)}),
                 ('Academic Performance',{"fields":('cgpa','attendance',)}),
                 ('System Information',{"fields":('created_at','updated_at',)}),)
