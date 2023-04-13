/* Première table : role */

-- On demarre une transaction afin de s'assurer de la cohérence globale de la BDD
BEGIN;

-- D'abord on supprime les tables 'si elles existent'

DROP TABLE IF EXISTS "role", "user", "payment", "user_has_payment", "address", "category", "promotion", "order", "product", "order_has_product", "comment", "user_has_vote";

-- Ensuite on les (re)crées

CREATE TABLE "role" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    -- pour avoir la date et l'heure on utilise le type "timestamp", et pour être le plus précis possible on utilisera plutôt le type "timestampz" qui contient en plus de la date et de l'heure le fuseau horaire défini dans les locales du serveur
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

/* Deuxième table : user */

CREATE TABLE "user" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
  -- si l'on veut pouvoir supprimer un user qui contient un role, on est obligé de rajouter "ON DELETE CASCADE" qui aura pour conséquence de supprimer le role qui fait référence à la table user
    "role_id" INTEGER NOT NULL REFERENCES "role"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

/* Troisième table : payment */

CREATE TABLE "payment" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "card_number" BIGINT NOT NULL,
    "expirency" DATE NOT NULL,
    "cvc" SMALLINT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

/* Quatrième table : user_has_payment */

CREATE TABLE "user_has_payment" (
    "user_id" INTEGER NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "payment_id" INTEGER NOT NULL REFERENCES "payment"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

/* Cinquième table : address */

CREATE TABLE "address" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "street" TEXT NOT NULL,
    "zip" VARCHAR(50) NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "user_id " INTEGER NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

/* Sixième table : category */

CREATE TABLE "category" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

/* Septième table : promotion */

CREATE TABLE "promotion" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "percent" DECIMAL(5,2),
    "validity" DATE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

/* Huitième table : order */

CREATE TABLE "order" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "number_order" INT NOT NULL,
    "user_id" INTEGER NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

/* Neuvième table : product */

CREATE TABLE "product" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "stock" INT,
    "promotion_id" INTEGER NOT NULL REFERENCES "promotion"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

/* Dixième table : order_has_product */

CREATE TABLE "order_has_product" (
    "product_id" INTEGER NOT NULL REFERENCES "product"("id") ON DELETE CASCADE,
    "order_id" INTEGER NOT NULL REFERENCES "order"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

/* Onzième table : category_has_product */

CREATE TABLE "category_has_product" (
    "category_id" INTEGER NOT NULL REFERENCES "category"("id") ON DELETE CASCADE,
    "product_id" INTEGER NOT NULL REFERENCES "product"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

/* Douzième table : comment */

CREATE TABLE "comment" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "product_id" INTEGER NOT NULL REFERENCES "product"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

/* Treizième table : user_has_vote */

CREATE TABLE "user_has_vote" (
    "user_id" INTEGER NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "product_id" INTEGER NOT NULL REFERENCES "product"("id") ON DELETE CASCADE,
    "rating" DECIMAL(3,1),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMIT;
