import time

from django.core.management.base import BaseCommand
from django.db import connection, reset_queries, transaction

from vehicles.models import Vehicle


class Command(BaseCommand):
    """
    This command is deleting everything from database.
    """
    help = 'Deletes all Vehicle data'

    def handle(self, *args, **options):
        reset_queries()
        start = time.perf_counter()
        start_queries = len(connection.queries)
        with transaction.atomic():
            Vehicle.objects.all().delete()
        end = time.perf_counter()
        end_queries = len(connection.queries)
        print(f"Finished in : {(end - start):.2f}s")
        print(f"Number of Queries : {end_queries - start_queries}")
