from PIL import Image

source = Image.open('/home/ubuntu/upload/IMG_48142.jpg').convert('RGB')
# The supplied menu places the illustrated Food Chapter logo in the upper-left panel.
logo = source.crop((35, 15, 520, 240))
logo.save('/home/ubuntu/webdev-static-assets/food-chapter-owner-logo.jpg', quality=94, optimize=True)
