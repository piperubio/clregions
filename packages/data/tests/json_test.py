import unittest
import json


class TestJson(unittest.TestCase):
    def test_json_object(self):
        with open("json/object.json") as f:
            data = json.load(f)
        self.assertEqual(data["country"], "Chile")
        self.assertEqual(data["countryCode"], "CL")
        self.assertEqual("regions" in data, True)
        self.assertEqual(len(data["regions"]), 16)
        first_region = data["regions"]["01"]
        self.assertEqual("id" in first_region, True)
        self.assertEqual("shortName" in first_region, True)
        self.assertEqual("abbreviation" in first_region, True)
        self.assertEqual("isoCode" in first_region, True)
        self.assertEqual("provinces" in first_region, True)
        first_province = first_region["provinces"]["011"]
        self.assertEqual("id" in first_province, True)
        self.assertEqual("name" in first_province, True)
        self.assertEqual("communes" in first_province, True)
        first_commune = first_province["communes"]["01101"]
        self.assertEqual("id" in first_commune, True)
        self.assertEqual("name" in first_commune, True)

    def test_json_array(self):
        with open("json/array.json") as f:
            data = json.load(f)
        
        # Verificar estructura principal
        self.assertEqual(data["country"], "Chile")
        self.assertEqual(data["countryCode"], "CL")
        self.assertTrue(isinstance(data["regions"], list))
        
        # Verificar regiones
        self.assertEqual(len(data["regions"]), 16)
        
        # Verificar primera región
        first_region = data["regions"][0]
        self.assertTrue("id" in first_region)
        self.assertTrue("name" in first_region)
        self.assertTrue("shortName" in first_region)
        self.assertTrue("abbreviation" in first_region)
        self.assertTrue("isoCode" in first_region)
        self.assertTrue("provinces" in first_region)
        
        # Verificar provincias
        first_province = first_region["provinces"][0]
        self.assertTrue("id" in first_province)
        self.assertTrue("name" in first_province)
        self.assertTrue("communes" in first_province)
        
        # Verificar comunas
        first_commune = first_province["communes"][0]
        self.assertTrue("id" in first_commune)
        self.assertTrue("name" in first_commune)

        # Verificar datos específicos de la primera región
        self.assertEqual(first_region["id"], "01")
        self.assertEqual(first_region["name"], "Región de Tarapacá")
        self.assertEqual(first_region["shortName"], "Tarapacá")
        self.assertEqual(first_region["abbreviation"], "TPCA")
        self.assertEqual(first_region["isoCode"], "CL-TA")