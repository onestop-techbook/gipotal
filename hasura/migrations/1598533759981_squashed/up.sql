
CREATE TABLE "public"."circles"("id" serial NOT NULL, "name" text NOT NULL, "description" text, "tbf9_url" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));

CREATE TABLE "public"."circle_links"("id" serial NOT NULL, "circle_id" integer NOT NULL, "url" text NOT NULL, "link_kind" integer NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));

CREATE TABLE "public"."circle_items"("id" serial NOT NULL, "name" text NOT NULL, "kana" text NOT NULL, "genre_id" integer NOT NULL, "booth_url" integer, "first_event_text" text, "image_url" text NOT NULL, "description" text NOT NULL, "published_on" date NOT NULL, "circle_id" integer NOT NULL, "tora_url" text, "amazon_url" text, "page_num" integer, "price" integer, PRIMARY KEY ("id") , UNIQUE ("id"));

CREATE TABLE "public"."tag"("id" serial NOT NULL, "name" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));

CREATE TABLE "public"."tagging"("id" serial NOT NULL, "item_id" integer NOT NULL, "tag_id" integer NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));

CREATE TABLE "public"."genre"("id" serial NOT NULL, "genre" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));
