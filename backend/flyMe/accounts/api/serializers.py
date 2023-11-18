from rest_framework import serializers
from accounts.models import *
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

# class UserSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     first_name = serializers.CharField(max_length=100)
#     last_name = serializers.CharField(max_length=100)
#     email = serializers.EmailField()    # ... other fields
#     username = serializers.CharField(max_length=100)
#     passport_number = serializers.CharField(max_length=20, required=False)
#     phone = serializers.CharField(max_length=20, required=False)
#     is_email_verified = serializers.BooleanField(default=False)
#     address = serializers.CharField(max_length=200, required=False)
#     gender = serializers.CharField(max_length=1, required=False)
#     post_code = serializers.IntegerField(required=False)
#     created_at = serializers.DateField(read_only=True)
#     updated_at = serializers.DateField(read_only=True)
#     passport_expire_date = serializers.DateField(required=False)
#     image = serializers.ImageField(required=False)
#     activation_link_created_at = serializers.DateTimeField(required=False)
#     birth_date = serializers.DateField(required=False)
#     # password = serializers.CharField(max_length=128)
#     # country = serializers()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = (
            'id', 'username', 'email', 'first_name', 'last_name', 'passport_number',
            'passport_expire_date', 'phone', 'image', 'is_email_verified',
            'activation_link_created_at', 'birth_date',
            'gender', 'post_code', 'created_at', 'updated_at', 'is_superuser', 'country', 'city', 'region'
        )
    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.save()
        return instance


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=MyUser.objects.all())]
            )
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = MyUser
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name','birth_date','gender','passport_expire_date','passport_number','phone')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = MyUser.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            birth_date=validated_data['birth_date'],
            gender=validated_data['gender'],
            passport_expire_date=validated_data['passport_expire_date'],
            passport_number=validated_data['passport_number'],
            phone=validated_data['phone'],
            # country=validated_data['country'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    
class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = '__all__'

        def create(self, validated_data):
            return Wallet.objects.create(**validated_data)

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'

        def create(self, validated_data):
            return Transaction.objects.create(**validated_data)
        
class ComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complaint
        fields = '__all__'

        def create(self, validated_data):
            return Complaint.objects.create(**validated_data)

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'

        def create(self, validated_data):
            return Notification.objects.create(**validated_data)
        
class PaymentCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentCard
        fields = '__all__'

        def create(self, validated_data):
            return PaymentCard.objects.create(**validated_data)
    
