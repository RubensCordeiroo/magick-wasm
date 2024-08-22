/*
  Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
  Licensed under the Apache License, Version 2.0.
*/

import { Channels } from '@src/enums/channels';
import { Percentage } from '@src/types/percentage';
import { TestImages } from '@test/test-images';

describe('MagickImage#threshold', () => {
    it('should threshold the image with the correct default values', () => {
        TestImages.Builtin.logo.use((image) => {
            image.clone((other) => {
                image.threshold(new Percentage(80));
                other.threshold(new Percentage(80), Channels.Undefined);

                expect(image).toEqualImage(other);
            });
        });
    });

    it('should threshold the image', () => {
        TestImages.Builtin.logo.use((image) => {
            image.clone((other) => {
                image.threshold(new Percentage(80));

                expect(image).toEqualImage(other, 0.16559);
            });
        });
    });
});
