import unittest
import pandas as pd


class TestCSV(unittest.TestCase):
    def test_regions_csv(self):
        df = pd.read_csv("csv/regions.csv")
        self.assertEqual(df.shape, (16, 5))

    def test_provinces_csv(self):
        df = pd.read_csv("csv/provinces.csv")
        self.assertEqual(df.shape, (56, 3))

    def test_communes_csv(self):
        df = pd.read_csv("csv/communes.csv")
        self.assertEqual(df.shape, (346, 3))
