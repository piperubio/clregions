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
        self.assertTrue(isinstance(first_region["provinces"], list))
        
        # Verificar provincias de la primera región
        first_province = first_region["provinces"][0]
        self.assertTrue("id" in first_province)
        self.assertTrue("name" in first_province)
        self.assertTrue(isinstance(first_province["communes"], list))
        
        # Verificar comunas
        first_commune = first_province["communes"][0]
        self.assertTrue("id" in first_commune)
        self.assertTrue("name" in first_commune)

    def test_regions_array(self):
        with open("json/regions.json") as f:
            regions = json.load(f)
        
        self.assertTrue(isinstance(regions, list))
        self.assertEqual(len(regions), 16)
        
        first_region = regions[0]
        self.assertEqual(first_region["id"], "01")
        self.assertEqual(first_region["name"], "Región de Tarapacá")
        self.assertEqual(first_region["shortName"], "Tarapacá")
        self.assertEqual(first_region["abbreviation"], "TPCA")
        self.assertEqual(first_region["isoCode"], "CL-TA")

    def test_provinces_array(self):
        with open("json/provinces.json") as f:
            provinces = json.load(f)
        
        self.assertTrue(isinstance(provinces, list))
        self.assertTrue(len(provinces) > 0)
        
        first_province = provinces[0]
        self.assertTrue("id" in first_province)
        self.assertTrue("name" in first_province)
        self.assertTrue("regionId" in first_province)

    def test_communes_array(self):
        with open("json/communes.json") as f:
            communes = json.load(f)
        
        self.assertTrue(isinstance(communes, list))
        self.assertTrue(len(communes) > 0)
        
        first_commune = communes[0]
        self.assertTrue("id" in first_commune)
        self.assertTrue("name" in first_commune)
        self.assertTrue("provinceId" in first_commune)