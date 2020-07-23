import time, random

from django.core.management.base import BaseCommand
from django.db import connection, reset_queries, transaction
from faker import Faker

from vehicles.models import Vehicle

faker = Faker()


class Command(BaseCommand):
    """
    This command is for inserting dummy items into database.
    """
    help = 'Create dummy Vehicles'

    def add_arguments(self, parser):
        parser.add_argument('number', type=int, help='Indicates the number of vehicles')

    def handle(self, *args, **options):
        number = options['number']
        reset_queries()
        start = time.perf_counter()
        start_queries = len(connection.queries)
        with transaction.atomic():
            vehicles = []
            for i in range(0, number):
                vehicles.append(Vehicle(
                    name=faker.street_name(),
                    type=random.choice(Vehicle.VEHICLE_TYPE)[1],
                    description=faker.paragraph(),
                    status=random.choice(Vehicle.VEHICLE_STATUS)[1],
                    isAvailable=faker.pybool(),
                    latitude=faker.latitude(),
                    longitude=faker.longitude(),
                    altitude=0,
                ))
            Vehicle.objects.bulk_create(vehicles)
        end = time.perf_counter()
        end_queries = len(connection.queries)
        print(f"Finished in : {(end - start):.2f}s")
        print(f"Number of Queries : {end_queries - start_queries}")
