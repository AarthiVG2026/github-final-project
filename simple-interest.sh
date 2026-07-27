#!/bin/bash
# Simple Interest Calculator

echo "Enter Principal:"
read principal

echo "Enter Rate of Interest:"
read rate

echo "Enter Time (in years):"
read time

si=$((principal * rate * time / 100))
echo "Simple Interest = $si"
