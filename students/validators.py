import re
from django.core.exceptions import ValidationError
def validate_student_name(value):
    pattern= r"^[A-Za-z '-]+$"
    if not re.match(pattern, value):
        raise ValidationError("Name should only contain alphabetic characters, spaces, hyphens and apostrophes.")
def validate_roll_number_pattern(value):
    pattern=r"^[A-Z0-9]{10}"
    if not re.match(pattern,value):    
        raise ValidationError("Roll number should be 10 characters long and must contain uppercase and numeric values only! ")
def validate_phone_number(value):
    pattern=r"^[6-9][0-9]{9}$"
    if not re.match(pattern,value):
        raise ValidationError("Phone number should be 10 digits long and must start with 6,7,8,9.")
    
    