import unittest
import sqlite3


class TestSQLFiles(unittest.TestCase):
    def setUp(self):
        self.conn = sqlite3.connect(":memory:")
        self.cursor = self.conn.cursor()

    def tearDown(self):
        self.conn.close()

    def test_regions_sql(self):
        with open("sql/regions.sql", "r", encoding="utf-8") as file:
            sql_script = file.read()
        self.cursor.executescript(sql_script)
        self.cursor.execute(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='region';"
        )
        self.assertIsNotNone(self.cursor.fetchone())
        self.cursor.execute(
            "SELECT name FROM region WHERE name LIKE '%Libertador General%';"
        )
        self.assertIsNotNone(self.cursor.fetchone())

    def test_provinces_sql(self):
        with open("sql/provinces.sql", "r", encoding="utf-8") as file:
            sql_script = file.read()
        self.cursor.executescript(sql_script)
        self.cursor.execute(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='province';"
        )
        self.assertIsNotNone(self.cursor.fetchone())

    def test_communes_sql(self):
        with open("sql/communes.sql", "r", encoding="utf-8") as file:
            sql_script = file.read()
        self.cursor.executescript(sql_script)
        self.cursor.execute(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='commune';"
        )
        self.assertIsNotNone(self.cursor.fetchone())
