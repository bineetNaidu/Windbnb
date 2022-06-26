-- CreateTable
CREATE TABLE "rooms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "images" TEXT[],
    "rating" INTEGER NOT NULL DEFAULT 0,
    "apartment_type" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "is_superhost" BOOLEAN NOT NULL DEFAULT false,
    "beds" INTEGER NOT NULL DEFAULT 0,
    "bedrooms" INTEGER NOT NULL DEFAULT 0,
    "bathrooms" INTEGER NOT NULL DEFAULT 0,
    "guests" INTEGER NOT NULL DEFAULT 0,
    "price" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "cancellable" BOOLEAN NOT NULL DEFAULT true,
    "has_tv" BOOLEAN NOT NULL DEFAULT true,
    "has_kitchen" BOOLEAN NOT NULL DEFAULT true,
    "has_airconditioning" BOOLEAN NOT NULL DEFAULT true,
    "has_wifi" BOOLEAN NOT NULL DEFAULT true,
    "has_free_parking" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);
