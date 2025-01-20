import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SingIn = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView className="h-full bg-white ">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10 ">
          <Text className="text-base text-center text-blue-200 uppercase font-rubik">
            Welcome to ReState
          </Text>
          <Text className="mt-2 text-3xl text-center font-rubik-bold text-black-300">
            Let's Get You Closer to {"\n"}
            <Text className=" text-primary-300">Your Ideo Home</Text>
          </Text>
          <Text className="mt-12 text-lg text-center font-rubik text-black-200">
            Login to Restate with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="w-full py-4 mt-5 bg-white rounded-full shadow-md shadow-zinc-300 "
          >
            <View className="flex flex-row items-center justify-center gap-2">
              <Image
                source={icons.google}
                className="w-5 h-5 "
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingIn;
