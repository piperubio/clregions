import unittest
import json


class TestJson(unittest.TestCase):
    def test_regions_json(self):
        with open("json/data.json") as f:
            data = json.load(f)
        self.assertEqual(data["country"], "Chile")
        self.assertEqual("regions" in data, True)
        self.assertEqual(len(data["regions"]), 16)
        first_region = data["regions"]["01"]
        self.assertEqual("id" in first_region, True)
        self.assertEqual("short_name" in first_region, True)
        self.assertEqual("abbreviation" in first_region, True)
        self.assertEqual("iso_code" in first_region, True)
        self.assertEqual("provinces" in first_region, True)
        first_province = first_region["provinces"]["011"]
        self.assertEqual("id" in first_province, True)
        self.assertEqual("name" in first_province, True)
        self.assertEqual("communes" in first_province, True)
        first_commune = first_province["communes"]["01101"]
        self.assertEqual("id" in first_commune, True)
        self.assertEqual("name" in first_commune, True)
