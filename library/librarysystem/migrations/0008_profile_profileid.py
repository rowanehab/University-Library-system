# Generated by Django 3.2.5 on 2021-07-20 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('librarysystem', '0007_rename_active_book_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='profileID',
            field=models.IntegerField(default=True),
        ),
    ]